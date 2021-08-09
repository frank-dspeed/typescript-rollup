import MagicString from 'magic-string';
import { RenderOptions } from '../../utils/renderHelpers';
import {
	renderSystemExportExpression,
	renderSystemExportSequenceAfterExpression,
	renderSystemExportSequenceBeforeExpression
} from '../../utils/systemJsRendering';
import { HasEffectsContext } from '../ExecutionContext';
import { EMPTY_PATH, ObjectPath } from '../utils/PathTracker';
import Identifier from './Identifier';
import * as NodeType from './NodeType';
import { ExpressionNode, NodeBase } from './shared/Node';

export default class UpdateExpression extends NodeBase {
	argument!: ExpressionNode;
	operator!: '++' | '--';
	prefix!: boolean;
	type!: NodeType.tUpdateExpression;
	protected deoptimized = false;

	hasEffects(context: HasEffectsContext): boolean {
		if (!this.deoptimized) this.applyDeoptimizations();
		return (
			this.argument.hasEffects(context) ||
			this.argument.hasEffectsWhenAssignedAtPath(EMPTY_PATH, context)
		);
	}

	hasEffectsWhenAccessedAtPath(path: ObjectPath): boolean {
		return path.length > 1;
	}

	render(code: MagicString, options: RenderOptions): void {
		this.argument.render(code, options);
		if (options.format === 'system') {
			const variable = this.argument.variable!;
			const exportNames = options.exportNamesByVariable.get(variable);
			if (exportNames) {
				const _ = options.compact ? '' : ' ';
				if (this.prefix) {
					if (exportNames.length === 1) {
						renderSystemExportExpression(variable, this.start, this.end, code, options);
					} else {
						renderSystemExportSequenceAfterExpression(
							variable,
							this.start,
							this.end,
							this.parent.type !== NodeType.ExpressionStatement,
							code,
							options
						);
					}
				} else {
					const operator = this.operator[0];
					renderSystemExportSequenceBeforeExpression(
						variable,
						this.start,
						this.end,
						this.parent.type !== NodeType.ExpressionStatement,
						code,
						options,
						`${_}${operator}${_}1`
					);
				}
			}
		}
	}

	protected applyDeoptimizations(): void {
		this.deoptimized = true;
		this.argument.deoptimizePath(EMPTY_PATH);
		if (this.argument instanceof Identifier) {
			const variable = this.scope.findVariable(this.argument.name);
			variable.isReassigned = true;
		}
		this.context.requestTreeshakingPass();
	}
}
