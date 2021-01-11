const React = require('react');

const PageWrapper = (storyFn) => <div className="sg-page">{storyFn()}</div>;

module.exports = PageWrapper;
