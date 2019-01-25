/**
 * Copyright (C) 2016 Infinite Automation Software. All rights reserved.
 * @author Terry Packer
 */
package com.serotonin.m2m2.module.definitions.event.detectors;

import com.serotonin.m2m2.db.dao.DataPointDao;
import com.serotonin.m2m2.vo.DataPointVO;
import com.serotonin.m2m2.vo.event.detector.AbstractEventDetectorVO;
import com.serotonin.m2m2.vo.event.detector.NegativeCusumDetectorVO;
import com.serotonin.m2m2.web.mvc.rest.v1.model.events.detectors.AbstractEventDetectorModel;
import com.serotonin.m2m2.web.mvc.rest.v1.model.events.detectors.NegativeCusumEventDetectorModel;

/**
 * @author Terry Packer
 *
 */
public class NegativeCusumEventDetectorDefinition extends PointEventDetectorDefinition<NegativeCusumDetectorVO>{

	public static final String TYPE_NAME = "NEGATIVE_CUSUM";
		
	/* (non-Javadoc)
	 * @see com.serotonin.m2m2.module.EventDetectorDefinition#getEventDetectorSubTypeName()
	 */
	@Override
	public String getEventDetectorTypeName() {
		return TYPE_NAME;
	}

	/* (non-Javadoc)
	 * @see com.serotonin.m2m2.module.EventDetectorDefinition#getDescriptionKey()
	 */
	@Override
	public String getDescriptionKey() {
		return "pointEdit.detectors.negCusum";
	}

	@Override
	protected NegativeCusumDetectorVO createEventDetectorVO(DataPointVO vo) {
		return new NegativeCusumDetectorVO(vo);
	}

	@Override
	protected NegativeCusumDetectorVO createEventDetectorVO(int sourceId) {
        return new NegativeCusumDetectorVO(DataPointDao.getInstance().get(sourceId));
	}
	/* (non-Javadoc)
	 * @see com.serotonin.m2m2.module.EventDetectorDefinition#createModel(com.serotonin.m2m2.vo.event.detector.AbstractEventDetectorVO)
	 */
	@Override
	public AbstractEventDetectorModel<NegativeCusumDetectorVO> createModel(
			AbstractEventDetectorVO<NegativeCusumDetectorVO> vo) {
		return new NegativeCusumEventDetectorModel((NegativeCusumDetectorVO)vo);
	}

	/* (non-Javadoc)
	 * @see com.serotonin.m2m2.module.EventDetectorDefinition#getModelClass()
	 */
	@Override
	public Class<?> getModelClass() {
		return NegativeCusumEventDetectorModel.class;
	}
}
