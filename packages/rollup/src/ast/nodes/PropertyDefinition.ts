import { CallOptions } from '../CallOptions';
import { DeoptimizableEntity } from '../DeoptimizableEntity';
import { HasEffectsContext } from '../ExecutionContext';
import { NodeEvent } from '../NodeEvents';
import { ObjectPath, PathTracker } from '../utils/PathTracker';
import * as NodeType from './NodeType';
import PrivateIdentifier from './PrivateIdentifier';
import {
	ExpressionEntity,
	LiteralValueOrUnknown,
	UNKNOWN_EXPRESSION,
	UnknownValue
} from './shared/Expression';
import { ExpressionNode, NodeBase } from './shared/Node';

export default class PropertyDefinition extends NodeBase {
	computed!: boolean;
	key!: ExpressionNode | PrivateIdentifier;
	static!: boolean;
	type!: NodeType.tPropertyDefinition;
	value!: ExpressionNode | null;

	deoptimizePath(path: ObjectPath): void {
		this.value?.deoptimizePath(path);
	}

	deoptimizeThisOnEventAtPath(
		event: NodeEvent,
		path: ObjectPath,
		thisParameter: ExpressionEntity,
		recursionTracker: PathTracker
	): void {
		this.value?.deoptimizeThisOnEventAtPath(event, path, thisParameter, recursionTracker);
	}

	getLiteralValueAtPath(
		path: ObjectPath,
		recursionTracker: PathTracker,
		origin: DeoptimizableEntity
	): LiteralValueOrUnknown {
		return this.value
			? this.value.getLiteralValueAtPath(path, recursionTracker, origin)
			: UnknownValue;
	}

	getReturnExpressionWhenCalledAtPath(
		path: ObjectPath,
		callOptions: CallOptions,
		recursionTracker: PathTracker,
		origin: DeoptimizableEntity
	): ExpressionEntity {
		return this.value
			? this.value.getReturnExpressionWhenCalledAtPath(path, callOptions, recursionTracker, origin)
			: UNKNOWN_EXPRESSION;
	}

	hasEffects(context: HasEffectsContext): boolean {
		return (
			this.key.hasEffects(context) ||
			(this.static && this.value !== null && this.value.hasEffects(context))
		);
	}

	hasEffectsWhenAccessedAtPath(path: ObjectPath, context: HasEffectsContext): boolean {
		return !this.value || this.value.hasEffectsWhenAccessedAtPath(path, context);
	}

	hasEffectsWhenAssignedAtPath(path: ObjectPath, context: HasEffectsContext): boolean {
		return !this.value || this.value.hasEffectsWhenAssignedAtPath(path, context);
	}

	hasEffectsWhenCalledAtPath(
		path: ObjectPath,
		callOptions: CallOptions,
		context: HasEffectsContext
	): boolean {
		return !this.value || this.value.hasEffectsWhenCalledAtPath(path, callOptions, context);
	}
}
