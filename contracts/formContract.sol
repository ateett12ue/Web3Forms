// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FormContract {
    struct surveyFormLocked{
        uint amount;
        bool status;
    }
    mapping (address => string[]) formCreated;
    mapping (string => string[]) formResponses;
    mapping (address => string) customResponses;
    mapping (string => surveyFormLocked) surveyForm;
    mapping (address => uint256) collectionResponse;
    mapping (address => bool) undoResponses;
    address token = 0x5121B6fFC63A2832b67Fe318a3fC1E08CC4204a0;

    modifier checkCreatedResponse {
        string memory a = customResponses[msg.sender];
        bytes memory b = bytes(a);
        require(b.length > 32); 
        _;
    }
    function getAllFormCreated() public view returns(string[] memory){
        return formCreated[msg.sender];
    }

    function createFormCreatedEntry(string memory formId) public{
        formCreated[msg.sender].push(formId);
    }

    function getAllFormResponses(string memory formId) public view returns(string[] memory){
        return formResponses[formId];
    }

    function createFormResponseEntry(string memory formId, string memory responseId) public{
        formResponses[formId].push(responseId);
    }

    function getCustomResponses() public view returns(string memory){
        return customResponses[msg.sender];
    }

    function createCustomResponseEntry(string memory responseId) public{
        customResponses[msg.sender] = responseId;
    }

    function getSurveyFormLockedAmount(string memory formId) public view returns(surveyFormLocked memory){
        return surveyForm[formId];
    }

    function addSurveyFormLockedAmount(string memory formId, uint256 amount ) payable public{
        require(msg.value == amount*(10**18), "msg.value doesn't match amount submitted");
        require(msg.value > 0, "msg.value is zero");
        surveyForm[formId] = surveyFormLocked(amount, true);
    }

    function updateSurveyFormLockedAmountStatus(string memory formId ) public{
        surveyForm[formId].status = false;
    }

    function addCollectionFormResponses(uint256 amount, address creator) payable public{
        require(msg.value == amount*(10**18), "msg.value doesn't match amount submitted");
        require(msg.value > 0, "msg.value is zero");
        collectionResponse[creator] += amount;
    }
    
    function undoResponsesFromEverywhere() public checkCreatedResponse{
        undoResponses[address] = true;
    }
}