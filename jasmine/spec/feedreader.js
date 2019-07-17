/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {
  /* This is our first test suite - a test suite just contains
  * a related set of tests. This suite is all about the RSS
  * feeds definitions, the allFeeds letiable in our application.
  */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
    * allFeeds letiable has been defined and that it is not
    * empty. Experiment with this before you get started on
    * the rest of this project. What happens when you change
    * allFeeds in app.js to be an empty array and refresh the
    * page?
    */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* A test that loops through each feed
    * in the allFeeds objectect and ensures it has a URL defined
    * and that the URL is not empty.
    */
    it('it has a URL defined and that the URL is not empty', function () {
      allFeeds.forEach(object => {
        expect(object.url).toBeDefined();
        expect(object.url).not.toBeFalsy();
        expect(object.url).not.toBe('');
        expect(object.length).not.toBe(0);
      });
    });

    /* A test that loops through each feed
    * in the allFeeds objectect and ensures it has a name defined
    * and that the name is not empty.
    */
  });
  it('it has a name defined and that the name is not empty', function () {
    allFeeds.forEach(object => {
      expect(object.name).toBeDefined();
      expect(object.name).not.toBeFalsy();
      expect(object.name).not.toBe('');
      expect(object.length).not.toBe(0);
    });
  });
});


/* A test suite named "The menu" */
describe('The menu', function () {
  let body,
  menuIcon;

  beforeEach(function () {
    body = document.body;
    menuIcon = $('.menu-icon-link');
  });

  /* A test that ensures the menu element is
  * hidden by default. You'll have to analyze the HTML and
  * the CSS to determine how we're performing the
  * hiding/showing of the menu element.
  */
  it('the menu element is hidden by deafult', function () {
    expect($(document.body).hasClass('menu-hidden')).toBe(true);
  });

  /* A test that ensures the menu changes
  * visibility when the menu icon is clicked. This test
  * should have two expectations: does the menu display when
  * clicked and does it hide when clicked again.
  */
  it('the menu changes visibility when the menu icon is clicked', function () {
    menuIcon.click();  // Initial click
    expect($(document.body).hasClass('menu-hidden')).toBe(false);
    menuIcon.click();  // double click
    expect($(document.body).hasClass('menu-hidden')).toBe(true);
  });
});

/* A test suite named "Initial Entries" */
describe('Initial Entries', function () {
  let numberOfEntries;

  /* A test that ensures when the loadFeed
  * function is called and completes its work, there is at least
  * a single .entry element within the .feed container.
  * Remember, loadFeed() is asynchronous so this test will require
  * the use of Jasmine's beforeEach and asynchronous done() function.
  */
  beforeEach(function (done) {
    loadFeed(0,function(){
      done();
    });
  });


  it('there is at least a single .entry element within the feed container', function (done) {
    expect($('.feed .entry').length).not.toBe(0);
    done();
  });
});

/* A test suite named "New Feed Selection" */
describe('New Feed Selection', function () {
  let firstLoad,
  secondLoad;

  /* A test that ensures when a new feed is loaded
  * by the loadFeed function that the content actually changes.
  * Remember, loadFeed() is asynchronous.
  */
  beforeEach(function (done) {
    loadFeed(0, function () {
      firstLoad = $('.feed').html();
      loadFeed(1, function () {
        secondLoad = $('.feed').html();
        done();
      });
    });
  });

  it('content changes upon calling of loadFeed with different parameter', function (done) {
    expect(firstLoad).not.toEqual(secondLoad);
    done();
  });
});
