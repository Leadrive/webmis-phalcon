<?php
class IndexController extends ControllerBase{
	public function indexAction() {
		$this->tag->prependTitle('手机版');
		$this->view->setVar('LoadCSS',array('index.css'));
		$this->view->setVar('LoadJS',array('index.js'));
		$this->view->setTemplateAfter(APP_THEMES.'/main');
	}
}
