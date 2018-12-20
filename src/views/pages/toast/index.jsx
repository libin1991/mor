import React, { Component } from 'react'
import { Toast } from 'mor'
import PageModel from 'components/pageModel'
import DemoBlock from 'components/demoBlock'
import DemoButton from 'components/demoButton'
import Data from 'static/data'

export default class Test extends Component {
	data = Data.getComponentItemInfo('toast')
	visible = false

	demo1 () {
		Toast.config({
			message: 'Toast'
		})
	}

	demo2 () {
		Toast.config({
			message: '成功咯',
			type: 'success'
		})
	}

	demo3 () {
		Toast.config({
			message: '出错了',
			type: 'error'
		})
	}

	demo4 () {
		Toast.config({
			message: '成功咯',
			duration: 3000,
			type: 'success'
		})
	}

	render () {
		return (
			<PageModel {...this.data}>
				<DemoBlock title="基础用法" desc="demo1">
					<DemoButton className="w-full" onClick={this.demo1.bind(this)}>打开</DemoButton>
				</DemoBlock>
				<DemoBlock title="成功提示" desc="demo2">
					<DemoButton className="w-full" onClick={this.demo2.bind(this)}>打开</DemoButton>
				</DemoBlock>
				<DemoBlock title="失败提示" desc="demo3">
					<DemoButton className="w-full" onClick={this.demo3.bind(this)}>打开</DemoButton>
				</DemoBlock>
				<DemoBlock title="展示3s" desc="demo4 - 默认展示2s">
					<DemoButton className="w-full" onClick={this.demo4.bind(this)}>打开</DemoButton>
				</DemoBlock>
			</PageModel>
		)
	}
}
