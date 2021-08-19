global.SpreadsheetApp.getActive = jest.fn(() => ({
  getSheetByName: jest.fn(() => ({
    getDataRange: jest.fn(() => ({
      getValues: jest.fn(() => {
        return [
          ['id', 'userName', 'age', 'isActive', 'createdAt', 'updatedAt'],
          [
            1,
            'skunk',
            20,
            true,
            '2021-08-19T02:31:53.303Z',
            '2021-08-19T02:31:53.303Z',
          ],
        ];
      }),
    })),
  })),
}));
