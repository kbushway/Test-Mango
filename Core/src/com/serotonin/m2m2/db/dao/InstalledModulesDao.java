/**
 * @copyright 2018 {@link http://infiniteautomation.com|Infinite Automation Systems, Inc.} All rights reserved.
 * @author Phillip Dunlap
 */
package com.serotonin.m2m2.db.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;

import com.github.zafarkhaja.semver.Version;
import com.serotonin.m2m2.module.Module;
import com.serotonin.m2m2.module.ModuleRegistry;

public class InstalledModulesDao extends BaseDao {
    private static final Log LOG = LogFactory.getLog(InstalledModulesDao.class);
    
    public static final InstalledModulesDao instance = new InstalledModulesDao();
    
    private static final String DELETE_ALL = "DELETE FROM installedModules";
    private static final String DELETE_MODULE = "DELETE FROM installedModules WHERE name=?";
    private static final String INSERT_MODULE = "INSERT INTO installedModules (name, version) VALUES (?,?)";
    private static final String GET_MODULE = "SELECT version FROM installedModules WHERE name=?";
    private static final String GET_ALL = "SELECT name, version FROM installedModules";
    
    public void removeModuleVersion(String name) {
        ejt.update(DELETE_MODULE, name);
    }
    
    public void updateAllModuleVersions() {
        getTransactionTemplate().execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(TransactionStatus status) {
                ejt.update(DELETE_ALL);
                for(Module m : ModuleRegistry.getModules())
                    ejt.doInsert(INSERT_MODULE, new Object[] { m.getName(), m.getVersion().toString() }, new int[] {Types.VARCHAR, Types.VARCHAR});
            }
        });
    }

    /**
     * Update a single module version to its latest
     * @param module
     */
    public void updateModuleVersion(Module module) {
        getTransactionTemplate().execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(TransactionStatus status) {
                ejt.update(DELETE_MODULE, new Object[] {module.getName()});
                ejt.doInsert(INSERT_MODULE, new Object[] { module.getName(), module.getVersion().toString() }, new int[] {Types.VARCHAR, Types.VARCHAR});
            }
        });
    }
    
    public Version getModuleVersion(String name) {
        String version = ejt.queryForObject(GET_MODULE, new Object[] {name}, String.class, null);
        if(version != null)
            try {
                return Version.valueOf(version);
            } catch(Exception e) {
                LOG.warn("Failed to parse version string for module " + name, e);
            }
        return null;
    }
    
    public Map<String, Version> getAllModuleVersions() {
        final Map<String, Version> result = new HashMap<String, Version>();
        ejt.query(GET_ALL, new RowCallbackHandler() {
            @Override
            public void processRow(ResultSet rs) throws SQLException {
                String name = rs.getString(1);
                String version = rs.getString(2);
                if(version != null) {
                    try {
                        result.put(name, Version.valueOf(version));
                    } catch(Exception e) {
                        LOG.warn("Failed to parse version string for module " + name, e);
                    }
                } else {
                    result.put(name, null);
                }
            }
        });
        return result;
    }
}
