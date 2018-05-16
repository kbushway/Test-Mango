/**
 * Copyright (C) 2016 Infinite Automation Software. All rights reserved.
 * @author Terry Packer
 */
package com.serotonin.m2m2.vo.event;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

import org.apache.commons.lang3.StringUtils;

import com.serotonin.json.JsonException;
import com.serotonin.json.JsonReader;
import com.serotonin.json.ObjectWriter;
import com.serotonin.json.type.JsonBoolean;
import com.serotonin.json.type.JsonNumber;
import com.serotonin.json.type.JsonObject;
import com.serotonin.m2m2.i18n.ProcessResult;
import com.serotonin.m2m2.rt.event.handlers.EventHandlerRT;
import com.serotonin.m2m2.rt.event.handlers.ProcessHandlerRT;
import com.serotonin.m2m2.web.mvc.rest.v1.model.events.handlers.AbstractEventHandlerModel;
import com.serotonin.m2m2.web.mvc.rest.v1.model.events.handlers.ProcessEventHandlerModel;
import com.serotonin.util.SerializationHelper;

/**
 * @author Terry Packer
 *
 */
public class ProcessEventHandlerVO extends AbstractEventHandlerVO<ProcessEventHandlerVO>{

	private String activeProcessCommand;
    private int activeProcessTimeout = 15;
    private String inactiveProcessCommand;
    private int inactiveProcessTimeout = 15;
    private String acknowledgeProcessCommand;
    private int acknowledgeProcessTimeout = 15;
    private boolean acknowledgeProcessEvenIfInactive;
    
	public String getActiveProcessCommand() {
        return activeProcessCommand;
    }

    public void setActiveProcessCommand(String activeProcessCommand) {
        this.activeProcessCommand = activeProcessCommand;
    }

    public int getActiveProcessTimeout() {
        return activeProcessTimeout;
    }

    public void setActiveProcessTimeout(int activeProcessTimeout) {
        this.activeProcessTimeout = activeProcessTimeout;
    }

    public String getInactiveProcessCommand() {
        return inactiveProcessCommand;
    }

    public void setInactiveProcessCommand(String inactiveProcessCommand) {
        this.inactiveProcessCommand = inactiveProcessCommand;
    }

    public int getInactiveProcessTimeout() {
        return inactiveProcessTimeout;
    }

    public void setInactiveProcessTimeout(int inactiveProcessTimeout) {
        this.inactiveProcessTimeout = inactiveProcessTimeout;
    }

    public String getAcknowledgeProcessCommand() {
        return acknowledgeProcessCommand;
    }

    public void setAcknowledgeProcessCommand(String acknowledgeProcessCommand) {
        this.acknowledgeProcessCommand = acknowledgeProcessCommand;
    }
    
    public int getAcknowledgeProcessTimeout() {
        return acknowledgeProcessTimeout;
    }

    public void setAcknowledgeProcessTimeout(int acknowledgeProcessTimeout) {
        this.acknowledgeProcessTimeout = acknowledgeProcessTimeout;
    }

    public boolean isAcknowledgeProcessEvenIfInactive() {
        return acknowledgeProcessEvenIfInactive;
    }

    public void setAcknowledgeProcessEvenIfInactive(boolean acknowledgeProcessEvenIfInactive) {
        this.acknowledgeProcessEvenIfInactive = acknowledgeProcessEvenIfInactive;
    }

    
    @Override
    public void validate(ProcessResult response) {
    	super.validate(response);
        if (StringUtils.isBlank(activeProcessCommand) && StringUtils.isBlank(inactiveProcessCommand))
            response.addGenericMessage("eventHandlers.invalidCommands");

        if (!StringUtils.isBlank(activeProcessCommand) && activeProcessTimeout <= 0)
            response.addGenericMessage("validate.greaterThanZero");

        if (!StringUtils.isBlank(inactiveProcessCommand) && inactiveProcessTimeout <= 0)
            response.addGenericMessage("validate.greaterThanZero");
        
        if (!StringUtils.isBlank(acknowledgeProcessCommand) && acknowledgeProcessTimeout <= 0)
            response.addGenericMessage("validate.greaterThanZero");
    }
    
    //
    //
    // Serialization
    //
    private static final long serialVersionUID = -1;
    private static final int version = 2;

    private void writeObject(ObjectOutputStream out) throws IOException {
    	out.writeInt(version);
        SerializationHelper.writeSafeUTF(out, activeProcessCommand);
        out.writeInt(activeProcessTimeout);
        SerializationHelper.writeSafeUTF(out, inactiveProcessCommand);
        out.writeInt(inactiveProcessTimeout);
        SerializationHelper.writeSafeUTF(out, acknowledgeProcessCommand);
        out.writeInt(acknowledgeProcessTimeout);
        out.writeBoolean(acknowledgeProcessEvenIfInactive);
    }
    
    private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {
        int ver = in.readInt();
        if(ver == 1){
		    activeProcessCommand = SerializationHelper.readSafeUTF(in);
		    activeProcessTimeout = in.readInt();
		    inactiveProcessCommand = SerializationHelper.readSafeUTF(in);
		    inactiveProcessTimeout = in.readInt();
		    acknowledgeProcessCommand = null;
		    acknowledgeProcessTimeout = 15;
		    acknowledgeProcessEvenIfInactive = false;
        }
        else if(ver == 2) {
            activeProcessCommand = SerializationHelper.readSafeUTF(in);
            activeProcessTimeout = in.readInt();
            inactiveProcessCommand = SerializationHelper.readSafeUTF(in);
            inactiveProcessTimeout = in.readInt();
            acknowledgeProcessCommand = SerializationHelper.readSafeUTF(in);
            acknowledgeProcessTimeout = in.readInt();
            acknowledgeProcessEvenIfInactive = in.readBoolean();
        }
    }
    
    @Override
    public void jsonWrite(ObjectWriter writer) throws IOException, JsonException {
    	super.jsonWrite(writer);
        writer.writeEntry("activeProcessCommand", activeProcessCommand);
        writer.writeEntry("activeProcessTimeout", activeProcessTimeout);
        writer.writeEntry("inactiveProcessCommand", inactiveProcessCommand);
        writer.writeEntry("inactiveProcessTimeout", inactiveProcessTimeout);
        writer.writeEntry("acknowledgeProcessCommand", acknowledgeProcessCommand);
        writer.writeEntry("acknowledgeProcessTimeout", acknowledgeProcessTimeout);
        writer.writeEntry("acknowledgeProcessEvenIfInactive", acknowledgeProcessEvenIfInactive);
    }
    
    @Override
    public void jsonRead(JsonReader reader, JsonObject jsonObject) throws JsonException {
    	super.jsonRead(reader, jsonObject);
        String text = jsonObject.getString("activeProcessCommand");
        if (text != null)
            activeProcessCommand = text;

        JsonNumber i = jsonObject.getJsonNumber("activeProcessTimeout");
        if (i != null)
            activeProcessTimeout = i.intValue();

        text = jsonObject.getString("inactiveProcessCommand");
        if (text != null)
            inactiveProcessCommand = text;

        i = jsonObject.getJsonNumber("inactiveProcessTimeout");
        if (i != null)
            inactiveProcessTimeout = i.intValue();

        text = jsonObject.getString("acknowledgeProcessCommand");
        if (text != null)
            acknowledgeProcessCommand = text;

        i = jsonObject.getJsonNumber("acknowledgeProcessTimeout");
        if (i != null)
            acknowledgeProcessTimeout = i.intValue();
        
        JsonBoolean b = jsonObject.getJsonBoolean("acknowledgeProcessEvenIfInactive");
        if(b != null)
            acknowledgeProcessEvenIfInactive = b.booleanValue();
    }
    
    @Override
    public EventHandlerRT<ProcessEventHandlerVO> createRuntime(){
    	return new ProcessHandlerRT(this);
    }
    
	/* (non-Javadoc)
	 * @see com.serotonin.m2m2.vo.event.AbstractEventHandlerVO#asModel()
	 */
	@Override
	public AbstractEventHandlerModel<?> asModel() {
		return new ProcessEventHandlerModel(this);
	}

}
