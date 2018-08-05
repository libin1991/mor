import React, { Component } from 'react'
import classNames from 'classnames'
import DropTitle from './title'
import DropContent from './content'
import DropCtrl from './ctrl'

export default class Drop extends Component {
	constructor (props) {
		super(props)
		this.ctrl = new DropCtrl
	}
	
	static title = DropTitle
	static content = DropContent
	
	static defaultProps = {
		isOpen: false
	}
	
	componentWillMount () {
		const { onChange } = this.props
		
		this.ctrl.on('monaDropCtrl', isOpen => {
			onChange && onChange(isOpen)
		})
	}
	
	componentWillUnmount () {
		this.ctrl.off('monaDropCtrl')
	}
	
	render () {
		const {
			className,
			isOpen,
			onChange,
			children,
			...props
		} = this.props
		
		let child = children
		child = React.Children.map(children, (v) => {
			if (!v) {
				return
			}
			if (v.type === DropTitle || v.type === DropContent) {
				return React.cloneElement(v, { isOpen: isOpen, ctrl: this.ctrl })
			} else {
				return v
			}
		})
		
		return (
			<div className={classNames('mona-drop', className)} {...props}>
				{child}
			</div>
		)
	}
}
