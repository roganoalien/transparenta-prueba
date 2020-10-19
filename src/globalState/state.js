//  ██████╗ ██╗      ██████╗ ██████╗  █████╗ ██╗
// ██╔════╝ ██║     ██╔═══██╗██╔══██╗██╔══██╗██║
// ██║  ███╗██║     ██║   ██║██████╔╝███████║██║
// ██║   ██║██║     ██║   ██║██╔══██╗██╔══██║██║
// ╚██████╔╝███████╗╚██████╔╝██████╔╝██║  ██║███████╗
//  ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝

// ██████╗ ██████╗  ██████╗ ██╗   ██╗██╗██████╗ ███████╗██████╗
// ██╔══██╗██╔══██╗██╔═══██╗██║   ██║██║██╔══██╗██╔════╝██╔══██╗
// ██████╔╝██████╔╝██║   ██║██║   ██║██║██║  ██║█████╗  ██████╔╝
// ██╔═══╝ ██╔══██╗██║   ██║╚██╗ ██╔╝██║██║  ██║██╔══╝  ██╔══██╗
// ██║     ██║  ██║╚██████╔╝ ╚████╔╝ ██║██████╔╝███████╗██║  ██║
// ╚═╝     ╚═╝  ╚═╝ ╚═════╝   ╚═══╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝

// Provider Composer from https://gist.github.com/stolinski/2d9545e19dd67bda64143cb1aae04ac0
// Imports all Providers so that we can isolate each and everyone with only one Provider on the ROUTER
// All states are managed through state hooks in their individual Providers

import React from 'react';
import { NewsProvider } from './states/news-state';

function ProviderComposer({ contexts, children }) {
	return contexts.reduceRight(
		(kids, parent) => React.cloneElement(parent, { children: kids }),
		children
	);
}
function ContextProvider({ children }) {
	return (
		// Heres where i need to call my other providers
		<ProviderComposer contexts={[<NewsProvider />]}>
			{children}
		</ProviderComposer>
	);
}

export { ContextProvider };
