/* global Moralis*/
Moralis.Cloud.define("getFormsByUserId", async (request) => {
    const query = new Moralis.Query("formCreated");
    query.equalTo("ethAddress", request.params.id);
    const results = await query.find();
    return results;
  });
  
  //update created
Moralis.Cloud.define("getFormResponseById", async (request) => {
    const query = new Moralis.Query("formResponses");
    query.equalTo("formId", request.params.id);
    const results = await query.find();
    return results;
  });
  
  //update created
Moralis.Cloud.define("getCustomAnswersByEthId", async (request) => {
    const query = new Moralis.Query("customAnswers");
    query.equalTo("ethAddress", request.params.id);
    const results = await query.find();
    return results;
  });
  
  //update created
Moralis.Cloud.define("getSurveyFormsDataByFormId", async (request) => {
    const query = new Moralis.Query("SurveyFormsData");
    query.equalTo("formId", request.params.id);
    const results = await query.find();
    return results;
  });
  
  //update Created
Moralis.Cloud.define("getCollectionFormsDataByFormId", async (request) => {
    const query = new Moralis.Query("CollectionForm");
    query.equalTo("formId", request.params.id);
    const results = await query.find();
    return results;
  });
  
  Moralis.Cloud.define("getGeneralFormDataByFormId", async (request) => {
    const query = new Moralis.Query("GeneralForms");
    query.equalTo("formId", request.params.id);
    const results = await query.find();
    return results;
  });
  
  //update Created
Moralis.Cloud.define("addUpdateForms", async (request) => {
    const logger = Moralis.Cloud.getLogger();
    try
    {
      const newFormObject = new Moralis.Object.extend("formCreated");
      const newForm = new newFormObject();
      newForm.set('ethAddress',request.params.ethAddress);
      newForm.set('formId',request.params.formId);
      newForm.set('name',request.params.name);
      newForm.set('formType',request.params.formType);
      newForm.set('status',request.params.status);
      newForm.set('closingDate',request.params.closingDate);
      await newForm.save().then((result)=>{
          return result
      })
    }
    catch(error)
    {
        logger.error(`Error while adding Forms ${error}`);
      return false;
    }
  });
  
  
Moralis.Cloud.define("addUpdateFormsResponses", async (request) => {
    const logger = Moralis.Cloud.getLogger();
    try
    {
      const query = new Moralis.Query("formResponses");
      query.equalTo("ethAddress", request.params.ethAddress);
      const results = await query.find();
      if (results)
      {
          return true;
      }
      else
      {
          const newResponseObject = new Moralis.Object.extend("formResponses");
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
      return false;
    }
  });
  
Moralis.Cloud.define("addUpdateCustomAnswers", async (request) => {
    const logger = Moralis.Cloud.getLogger();
    try
    {
      const query = new Moralis.Query("customAnswers");
      query.equalTo("ethAddress", request.params.ethAddress);
      const results = await query.find();
      if (results)
      {
          return true;
      }
      else
      {
          const newCustomAnswerObject = new Moralis.Object.extend("customAnswers");
          const newAnswer = new newCustomAnswerObject();
          newAnswer.set('name',request.params.name);
            newAnswer.set('ethAddress',request.params.ethAddress);
          newAnswer.set('twitterHandle',request.params.twitterHandle);
          newAnswer.set('linkedInId',request.params.linkedInId);
          newAnswer.set('gmailId',request.params.gmailId);
          newAnswer.set('twitterHandle',request.params.twitterHandle);
          newAnswer.set('githubId',request.params.githubId);
          newAnswer.set('discordId',request.params.discordId);
          await newAnswer.save().then((result)=>{
              return result
          })
      }
    }
    catch(error)
    {
        logger.error(`Error while creating Custom Answers ${error}`);
      return false;
    }
  });
  
  
Moralis.Cloud.define("addSurveyFormData", async (request) => {
    const logger = Moralis.Cloud.getLogger();
    try
    {
      const newSurveyFormObject = new Moralis.Object.extend("SurveyFormsData");
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
      return false;
    }
  });
  
  
Moralis.Cloud.define("addCollectionFormData", async (request) => {
    const logger = Moralis.Cloud.getLogger();
    try
    {
      const newCollectionFormObject = new Moralis.Object.extend("CollectionForm");
      const newCollectionFormData = new newCollectionFormObject();
      newCollectionFormData.set('formId',request.params.formId);
      newCollectionFormData.set('amountOfTokenSent',request.params.amountOfTokenSent);
      newCollectionFormData.set('tokenSent',request.params.tokenSent);
      newCollectionFormData.set('sendersWallet',request.params.sendersWallet);
      newCollectionFormData.set('transactionId',request.params.transactionId);
      newCollectionFormData.set('receiversWallet',request.params.receiversWallet);
      await newCollectionFormData.save().then((result)=>{
              return result
          })
    }
    catch(error)
    {
        logger.error(`Error while adding Collection Form Data ${error}`);
      return false;
    }
  });
  
Moralis.Cloud.define("addGeneralFormsData", async (request) => {
    const logger = Moralis.Cloud.getLogger();
    try
    {
      const newGeneralFormsObject = new Moralis.Object.extend("GeneralForms");
      const newGeneralFormsData = new newGeneralFormsObject();
      newGeneralFormsData.set('formId',request.params.formId);
      newGeneralFormsData.set('ethAddress',request.params.ethAddress);
      await newGeneralFormsData.save().then((result)=>{
              return result
          })
    }
    catch(error)
    {
        logger.error(`Error while adding General Form Data ${error}`);
      return false;
    }
  });
  
  