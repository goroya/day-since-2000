const Nods2000 = require('../');

describe('Nods2000', () => {
  describe('todays()', () => {
    it('data to day', () => {
      console.log(Nods2000);
      expect(Nods2000.toDate(0)).toEqual({ "year": 2000,  "month": 1, "day": 1});
      expect(Nods2000.toDate(365)).toEqual({ "year": 2000,  "month": 12, "day": 31});
      expect(Nods2000.toDate(366)).toEqual({ "year": 2001,  "month": 1, "day": 1});
      expect(Nods2000.toDate(730)).toEqual({ "year": 2001,  "month": 12, "day": 31});
      expect(Nods2000.toDate(731)).toEqual({ "year": 2002,  "month": 1, "day": 1});
      expect(Nods2000.toDate(18627)).toEqual({ "year": 2050,  "month": 12, "day": 31});
      expect(Nods2000.toDate(36159)).toEqual({ "year": 2098,  "month": 12, "day": 31});
      expect(Nods2000.toDate(36160)).toEqual({ "year": 2099,  "month": 1, "day": 1});
      expect(Nods2000.toDate(36493)).toEqual({ "year": 2099,  "month": 11, "day": 30});
      expect(Nods2000.toDate(36494)).toEqual({ "year": 2099,  "month": 12, "day": 1});
      expect(Nods2000.toDate(36524)).toEqual({ "year": 2099,  "month": 12, "day": 31});
      expect(Nods2000.toDate(6618)).toEqual({ "year": 2018,  "month": 2, "day": 13});
    });
  });
  describe('todate()', () => {
    it('day to date', () => {
      expect(Nods2000.toDays(2000, 1, 1)).toBe(0);
      expect(Nods2000.toDays(2000, 12, 31)).toBe(365);
      expect(Nods2000.toDays(2001, 1, 1)).toBe(366);
      expect(Nods2000.toDays(2001, 12, 31)).toBe(730);
      expect(Nods2000.toDays(2002, 1, 1)).toBe(731);
      expect(Nods2000.toDays(2050, 12, 31)).toBe(18627);
      expect(Nods2000.toDays(2098, 12, 31)).toBe(36159);
      expect(Nods2000.toDays(2099, 1, 1)).toBe(36160);
      expect(Nods2000.toDays(2099, 11, 30)).toBe(36493);
      expect(Nods2000.toDays(2099, 12, 1)).toBe(36494);
      expect(Nods2000.toDays(2099, 12, 31)).toBe(36524);
      expect(Nods2000.toDays(2018, 1, 1)).toBe(6575);
      expect(Nods2000.toDays(2018, 2, 13)).toBe(6618);
    });
  });
});

