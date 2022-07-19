# Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- this can be done with a couple of chained array methods, or by using `reduce`.
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.


---

 console.log
    [
      { name: 'Carly', yearOfBirth: 1942, yearOfDeath: 1970 },
      { name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011 },
      { name: 'Jane', yearOfBirth: 1912, yearOfDeath: 1941 }
    ]

      at findTheOldest (12_findTheOldest/findTheOldest.js:9:11)

  console.log
    [
      { name: 'Carly', yearOfBirth: 2018, yearOfDeath: 2022 },
      { name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011 },
      { name: 'Jane', yearOfBirth: 1912, yearOfDeath: 1941 }
    ]

      at findTheOldest (12_findTheOldest/findTheOldest.js:9:11)

  console.log
    [
      { name: 'Carly', yearOfBirth: 1066, yearOfDeath: 2022 },
      { name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011 },
      { name: 'Jane', yearOfBirth: 1912, yearOfDeath: 1941 }
    ]

      at findTheOldest (12_findTheOldest/findTheOldest.js:9:11)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 1 passed, 3 total
Snapshots:   0 total
Time:        1.556 s
Ran all test suites matching /findTheOldest.spec.js/i.
gunmadude@gunmadude-VirtualBox:~/repos/javascript-exercises/12_findTheOldest$ npm test findTheOldest.spec.js 

> javascript-exercises@1.0.0 test
> jest "findTheOldest.spec.js"

Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
 PASS  12_findTheOldest/findTheOldest.spec.js
  findTheOldest
    ✓ finds the oldest person! (25 ms)
    ✓ finds the oldest person if someone is still living (3 ms)
    ✓ finds the oldest person if the OLDEST is still living (2 ms)

  console.log
    [
      { name: 'Carly', yearOfBirth: 1942, yearOfDeath: 1970 },
      { name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011 },
      { name: 'Jane', yearOfBirth: 1912, yearOfDeath: 1941 }
    ]

      at findTheOldest (12_findTheOldest/findTheOldest.js:9:11)

  console.log
    [
      { name: 'Carly', yearOfBirth: 2018, yearOfDeath: 2022 },
      { name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011 },
      { name: 'Jane', yearOfBirth: 1912, yearOfDeath: 1941 }
    ]

      at findTheOldest (12_findTheOldest/findTheOldest.js:9:11)

  console.log
    [
      { name: 'Carly', yearOfBirth: 1066, yearOfDeath: 2022 },
      { name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011 },
      { name: 'Jane', yearOfBirth: 1912, yearOfDeath: 1941 }
    ]

      at findTheOldest (12_findTheOldest/findTheOldest.js:9:11)
