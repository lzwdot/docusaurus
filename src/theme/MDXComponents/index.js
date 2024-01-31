import React from 'react';
// 导入原映射
import MDXComponents from '@theme-original/MDXComponents';
import HtmlDemo from '@site/src/components/HtmlDemo';
import JsDemo from '@site/src/components/JsDemo';

export default {
  // 复用默认的映射
  ...MDXComponents,
  HtmlDemo:HtmlDemo,
  JsDemo:JsDemo
};