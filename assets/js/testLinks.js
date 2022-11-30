import * as check from "check-broken-links";

const containsBroken = [
  "https://www.store.robliou.com",
  "https://www.robliou.com",
  "https://aha-login.herokuapp.com",
  "https://www.store.robliou.com",
  "https://www.store.robliou.com/blog",
];
check("https://base.url/", containsBroken).then((brokenlinks) => {
  console.log(brokenlinks);
  /*
    { top: [ { url: 'https://www.iAMbroken.com', err: [Object] } ],
      crawled:
       [ { link: 'https://iwasinside.com/iCONTAINbrokenlinks ',
           sources: [ 'https://iwasfoundinthislinkyou supplied.com', 'https://butalsointhisone.com' ] }
      ] },
      allchecked: { [ link: '', sources: [] ] } // This would obviously be populated
    */
});
