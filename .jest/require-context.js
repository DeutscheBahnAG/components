// we need this for the storyshots plugin to work, so it can automatically load
// all stories via require.context(), which normally is a webpack-only feature.
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();
