/* global Moralis*/
Moralis.Cloud.define("getFormsByUserId", async (request) => {
  const formCreated = Moralis.Object.extend("formCreated");
  const query = new Moralis.Query(formCreated);
  query.equalTo("ethAddress", request.params.id);
  const data = await query.find();
  const result = [];
  for (let i = 0; i < data.length; ++i) {
	result.push(data[i].attributes)
  }
  return result;
});

Moralis.Cloud.define("getFormsByFormId", async (request) => {
  const formCreated = Moralis.Object.extend("formCreated");
  const query = new Moralis.Query(formCreated);
  query.equalTo("formId", request.params.formId);
  const data = await query.first();
  if(data)
  {
  	return data.attributes;
  }
  else
  {
  	return []
  }
});

//update created
Moralis.Cloud.define("getFormResponseById", async (request) => {
  const formResponses = Moralis.Object.extend("formResponses");
  const query = new Moralis.Query(formResponses);
  query.equalTo("formId", request.params.id);
  const data = await query.find();
  const result = [];
  for (let i = 0; i < data.length; ++i) {
	result.push(data[i].attributes)
  }
  return result;
});

//update created
Moralis.Cloud.define("getCustomAnswersByEthId", async (request) => {
  const customAnswers = Moralis.Object.extend("customAnswers");
  const query = new Moralis.Query(customAnswers);
  query.equalTo("ethAddress", request.params.id);
  const data = await query.find();
  const result = [];
  for (let i = 0; i < data.length; ++i) {
	result.push(data[i].attributes)
  }
  return result;
});

//update created
Moralis.Cloud.define("getSurveyFormsDataByFormId", async (request) => {
  const SurveyFormsData = Moralis.Object.extend("SurveyFormsData");
  const query = new Moralis.Query(SurveyFormsData);
  query.equalTo("formId", request.params.id);
  const data = await query.find();
  const result = [];
  for (let i = 0; i < data.length; ++i) {
	result.push(data[i].attributes)
  }
  return result;
});

//update Created
Moralis.Cloud.define("getCollectionFormsDataByFormId", async (request) => {
  const CollectionForm = Moralis.Object.extend("CollectionForm");
  const query = new Moralis.Query(CollectionForm);
  query.equalTo("formId", request.params.id);
  const data = await query.find();
  const result = [];
  for (let i = 0; i < data.length; ++i) {
	result.push(data[i].attributes)
  }
  return result;
});  
  
Moralis.Cloud.define("getGeneralFormDataByFormId", async (request) => {
  const GeneralForms = Moralis.Object.extend("GeneralForms");
  const query = new Moralis.Query(GeneralForms);
  query.equalTo("formId", request.params.id);
  const data = await query.find();
  const result = [];
  for (let i = 0; i < data.length; ++i) {
	result.push(data[i].attributes)
  }
  return result;
});

//update Created
Moralis.Cloud.define("addUpdateForms", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  try
  {
    const newFormObject = Moralis.Object.extend("formCreated");
    const newForm = new newFormObject();
    newForm.set('ethAddress',request.params.ethAddress);
    newForm.set('formId',request.params.formId);
    newForm.set('name',request.params.name);
    newForm.set('formType',request.params.formType);
    newForm.set('status',request.params.status);
    newForm.set('closingDate',request.params.closingDate);
    newForm.set('description',request.params.description);
    newForm.set('metaData',request.params.metaData);
    await newForm.save().then((result)=>{
        return result
    })
  }
  catch(error)
  {
      logger.error(`Error while adding Forms ${error}`);
     return error;
  }
});


Moralis.Cloud.define("addUpdateFormsResponses", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  try
  {
    const formResponses = Moralis.Object.extend("formResponses");
    const query = new Moralis.Query(formResponses);
    query.equalTo("ethAddress", request.params.ethAddress);
    const results = await query.find();
    if (results)
    {
        return true;
    }
    else
    {
        const newResponseObject = Moralis.Object.extend("formResponses");
        const newResponse = new newResponseObject();
        newResponse.set('formId',request.params.formId);
        newResponse.set('submittedBy',request.params.submittedBy);
        newResponse.set('responseJson',request.params.response);
        await newResponse.save().then((result)=>{
            return result
        })
    }
  }
  catch(error)
  {
      logger.error(`Error while adding Forms Responses ${error}`);
      return error;
  }
});

Moralis.Cloud.define("addUpdateCustomAnswers", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  try
  {
    const customAnswers = Moralis.Object.extend("customAnswers");
    const query = new Moralis.Query(customAnswers);
    query.equalTo("ethAddress", request.params.ethAddress);
    const results = await query.first();
    const newAnswer = new customAnswers();
    if (results)
    {
		const allowed = results.attributes.allowedFormIds;
      	allowed.push(request.params.formId)
        newAnswer.set('allowedFormIds',allowed);
      	
    }
    else
    {

        newAnswer.set('name',request.params.name);
        newAnswer.set('ethAddress',request.params.ethAddress);
        newAnswer.set('twitterHandle',request.params.twitterHandle);
        newAnswer.set('githubId',request.params.githubId);
        newAnswer.set('discordId',request.params.discordId);
      	newAnswer.set('allowedFormIds',[request.params.formId]);
    }
    await newAnswer.save().then((result)=>{
            return result
        })
  }
  catch(error)
  {
      logger.error(`Error while creating Custom Answers ${error}`);
      return error;
  }
});


Moralis.Cloud.define("addSurveyFormData", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  try
  {
    const newSurveyFormObject = Moralis.Object.extend("SurveyFormsData");
    const newSurveyFormData = new newSurveyFormObject();
    newSurveyFormData.set('formId',request.params.formId);
    newSurveyFormData.set('tokenAlloted',request.params.tokenAlloted);
    newSurveyFormData.set('timeOfRelease',request.params.timeOfRelease);
    newSurveyFormData.set('transactionId',request.params.transactionID);
    newSurveyFormData.set('currentStatus',request.params.currentStatus);
    await newSurveyFormData.save().then((result)=>{
            return result
        })
  }
  catch(error)
  {
      logger.error(`Error while adding Survey Form Data ${error}`);
      return error;
  }
});

Moralis.Cloud.define("addSurveyFormResponse", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  try
  {
    const newSurveyResponseObject = Moralis.Object.extend("SurveyFormResponses");
    const newSurveyFormResponse = new newSurveyResponseObject();
    newSurveyFormResponse.set('formId',request.params.formId);
    newSurveyFormResponse.set('walletAddress',request.params.walletAddress);
    await newSurveyFormResponse.save().then((result)=>{
            return result
        })
  }
  catch(error)
  {
      logger.error(`Error while adding Survey Form Response ${error}`);
      return error;
  }
});


Moralis.Cloud.define("addCollectionFormData", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  try
  {
    const newCollectionFormObject = Moralis.Object.extend("CollectionFomr");
    const newCollectionFormData = new newCollectionFormObject();
    newCollectionFormData.set('formId',request.params.formId);
    newCollectionFormData.set('walletAddressFund',request.params.walletAddress);
    newCollectionFormData.set('status',request.params.status);
    await newCollectionFormData.save().then((result)=>{
            return result
        })
  }
  catch(error)
  {
      logger.error(`Error while adding Collection Form Data ${error}`);
      return error;
  }
});

Moralis.Cloud.define("addGeneralFormsData", async (request) => {
  const logger = Moralis.Cloud.getLogger();
  try
  {
    const newGeneralFormsObject = Moralis.Object.extend("GeneralForms");
    const newGeneralFormsData = new newGeneralFormsObject();
    newGeneralFormsData.set('formId',request.params.formId);
    newGeneralFormsData.set('ethAddress',request.params.ethAddress);
    await newGeneralFormsData.save().then((result)=>{
	      logger.info(`form data updated ${result}`);
            return result
        })
  }
  catch(error)
  {
      logger.error(`Error while adding General Form Data ${error}`);
      return error;
  }
});
