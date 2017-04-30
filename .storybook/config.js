import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}

function loadStories() {
	requireAll(require.context("../src", true, /.story\.js?$/));
}

setAddon(infoAddon);

configure(loadStories, module);
