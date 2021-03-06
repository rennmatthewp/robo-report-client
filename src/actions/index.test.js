import * as actions from './index';

describe('actions', () => {
  describe('submitNewUser', () => {
    it('should return an action of type: SUBMIT_NEW_USER', () => {
      const expected = {
        type: 'SUBMIT_NEW_USER',
        user: { name: 'user' }
      };
      expect(actions.submitNewUser({ name: 'user' })).toEqual(expected);
    });
  });

  describe('getSavedUserInfo', () => {
    it('should return an actions of type: GET_USER_INFO', () => {
      const expected = {
        type: 'GET_USER_INFO',
        userEmail: 'thedude@gmail.com'
      };
      expect(actions.getSavedUserInfo('thedude@gmail.com')).toEqual(expected);
    });
  });

  describe('captureUser', () => {
    it('should return an action of type: CAPTURE_USER', () => {
      const expected = {
        type: 'CAPTURE_USER',
        user: { name: 'user' }
      };
      expect(actions.captureUser({ name: 'user' })).toEqual(expected);
    });
  });

  describe('getUserComplaints', () => {
    it('should return an action of type: GET_USER_COMPLAINTS', () => {
      const expected = {
        type: 'GET_USER_COMPLAINTS',
        userId: 1
      };
      expect(actions.getUserComplaints(1)).toEqual(expected);
    });
  });

  describe('captureDbComplaints', () => {
    it('should return an action of type CAPTURE_DB_COMPLAINTS', () => {
      const expected = {
        type: 'CAPTURE_DB_COMPLAINTS',
        complaints: [{}]
      };
      expect(actions.captureDbComplaints([{}])).toEqual(expected);
    });
  });

  describe('updateUserInfo', () => {
    it('should return an action of type: UPDATE_USER_INFO', () => {
      const expected = {
        type: 'UPDATE_USER_INFO',
        user: { id: 1 }
      };
      expect(actions.updateUserInfo({ id: 1 })).toEqual(expected);
    });
  });

  describe('captureError', () => {
    it('should return an action of type: CAPTURE_ERROR', () => {
      const expected = {
        type: 'CAPTURE_ERROR',
        error: 'error message'
      };
      expect(actions.captureError('error message')).toEqual(expected);
    });
  });
  
  describe('getFCCData', () => {
    it('should return an action of type GET_FCC_DATA', () => {
      const expected = {
        type: 'GET_FCC_DATA'
      };
      expect(actions.getFCCData()).toEqual(expected);
    });
  });

  describe('captureFCCData', () => {
    it('should return an action of type: CAPTURE_FCC_DATA', () => {
      const expected = {
        type: 'CAPTURE_FCC_DATA',
        fccData: []
      };
      expect(actions.captureFCCData([])).toEqual(expected);
    });
  });
  
  describe('filterReports', () => {
    it('should return an action of type: FILTER_REPORT_VISBILITY', () => {
      const expected = {
        type: 'FILTER_REPORT_VISIBILITY',
        filter: 'ALL'
      };
      expect(actions.filterReports('ALL')).toEqual(expected);
    });
  });
});
