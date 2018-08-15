/*
 * Copyright (C) 2018 Infinite Automation Software. All rights reserved.
 */
package com.infiniteautomation.mango.spring.components;

import java.net.JarURLConnection;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Component;

import com.serotonin.m2m2.Common;
import com.serotonin.m2m2.module.Module;
import com.serotonin.m2m2.module.ModuleElementDefinition;
import com.serotonin.m2m2.module.ModuleRegistry;

/**
 * @author Jared Wiltshire
 */
@Component
public class ModuleElementDefinitionBeanPostProcessor implements BeanPostProcessor {
    private final Logger log = LoggerFactory.getLogger(this.getClass());

    @Autowired
    ConfigurableListableBeanFactory beanFactory;

    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        if (bean instanceof ModuleElementDefinition) {
            try {
                BeanDefinition def = beanFactory.getBeanDefinition(beanName);
                if (!(def.getSource() instanceof UrlResource)) {
                    throw new IllegalStateException("Unknown bean source");
                }

                URL url = ((UrlResource) def.getSource()).getURL();
                if ("jar".equals(url.getProtocol())) {
                    JarURLConnection connection = (JarURLConnection) url.openConnection();
                    url = connection.getJarFileURL();
                }

                Path path = Paths.get(url.toURI()).normalize();
                Path modulesDir = Paths.get(Common.MA_HOME, "web", "modules").normalize();

                if (!path.startsWith(modulesDir)) {
                    throw new IllegalStateException("ModuleElementDefinition resource path not in modules directory");
                }

                String moduleName = modulesDir.relativize(path).subpath(0, 1).toString();
                Module module = ModuleRegistry.getModule(moduleName);
                if (module == null) {
                    throw new IllegalStateException("Unknown module " + moduleName);
                }

                module.addDefinition((ModuleElementDefinition) bean);
            } catch (Exception e) {
                log.error("Error discovering which module registered ModuleElementDefinition as Spring bean: " + bean.getClass().getName(), e);
            }
        }
        return bean;
    }
}
