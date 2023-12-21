
// Import necessary classes and functions
//const CohortManager = require('../src/index.js');
import CohortManager from "../../src/index.js"; 
import Cohort from '../../src/cohort.js';
import Student from '../../src/student.js';

// Describe block for Cohort Manager 
describe('Cohort Manager', () => {
  let cohortManager;
  
  // Before each test, create a new Cohort Manager 
  beforeEach(() => {
    cohortManager = new CohortManager();
  });

  describe('createCohort', () => {
    it('should create a new cohort', () => {
      
      cohortManager.createCohort('class 11');
      expect(cohortManager.cohorts.length).toEqual(1);
      expect(cohortManager.cohorts[0].cohortName).toEqual('class 11');
    });

    it('should throw an error if cohort name is not a string or empty', () => {
      const invalidCohortName = 123;
      expect(() => cohortManager.createCohort(invalidCohortName)).toThrowError();
    });

    it('should throw an error if cohort name matches existing cohort', () => {
      const existingCohortName = 'ExistingCohort';
      cohortManager.createCohort(existingCohortName);
      expect(() => cohortManager.createCohort(existingCohortName)).toThrowError();
    });
  });




});