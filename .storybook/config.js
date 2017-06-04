import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/react-addon-info';

function requireAll(requireContext) {
	return requireContext.keys().map(requireContext);
}

function loadStories() {
	requireAll(require.context("../src", true, /.story\.js?$/));
}

setAddon(infoAddon);

configure(loadStories, module);
