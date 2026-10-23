const deepMerge = require('./deepMerge');

describe('deepMerge', () => {
  test('merges simple objects and preserves existing properties', () => {
    const target = { name: 'Ada', age: 36 };
    const source = { age: 37, role: 'engineer' };

    expect(deepMerge(target, source)).toEqual({
      name: 'Ada',
      age: 37,
      role: 'engineer'
    });
  });

  test('merges deeply nested objects without losing unrelated branches', () => {
    const target = {
      profile: {
        name: 'Ada',
        preferences: {
          theme: 'light',
          notifications: {
            email: true,
            sms: false
          }
        }
      }
    };
    const source = {
      profile: {
        preferences: {
          notifications: {
            email: false
          },
          language: 'en'
        }
      }
    };

    expect(deepMerge(target, source)).toEqual({
      profile: {
        name: 'Ada',
        preferences: {
          theme: 'light',
          language: 'en',
          notifications: {
            email: false,
            sms: false
          }
        }
      }
    });
  });
});