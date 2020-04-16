/*
 * Copyright (C) 2020 Infinite Automation Software. All rights reserved.
 */
package com.infiniteautomation.mango.spring.script;

import java.io.IOException;
import java.io.Reader;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Collections;
import java.util.Set;

import com.serotonin.m2m2.vo.role.Role;

/**
 * @author Jared Wiltshire
 */
public class PathMangoScript implements MangoScript {

    final String engineName;
    final String scriptName;
    final Set<Role> roles;
    final Path scriptPath;
    final Charset charset;

    public PathMangoScript(String engineName, String scriptName, Set<Role> roles, Path scriptPath, Charset charset) {
        this.engineName = engineName;
        this.scriptName = scriptName;
        this.roles = Collections.unmodifiableSet(roles);
        this.scriptPath = scriptPath;
        this.charset = charset;
    }

    @Override
    public Reader readScript() throws IOException {
        return Files.newBufferedReader(scriptPath, charset);
    }

    @Override
    public String getScriptName() {
        return scriptName;
    }

    @Override
    public String getEngineName() {
        return engineName;
    }

    public Path getScriptPath() {
        return scriptPath;
    }

    public Charset getCharset() {
        return charset;
    }

    @Override
    public Set<Role> getRoles() {
        return roles;
    }

    @Override
    public String getScriptFilename() {
        return scriptPath.toAbsolutePath().normalize().toString();
    }

}
