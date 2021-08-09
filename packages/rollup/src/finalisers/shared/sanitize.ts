// Generate strings which dereference dotted properties, but use array notation `['prop-deref']`
// if the property name isn't trivial
const shouldUseDot = /^[a-zA-Z$_][a-zA-Z0-9$_]*$/;

export function property(prop: string): string {
	return shouldUseDot.test(prop) ? `.${prop}` : `['${prop}']`;
}

export function keypath(keypath: string): string {
	return keypath.split('.').map(property).join('');
}
