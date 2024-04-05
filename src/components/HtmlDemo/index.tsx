import React, { useEffect, useRef, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.scss";

// class HtmlDemo extends React.Component {
function HtmlDemo(props) {
  const { siteConfig } = useDocusaurusContext();
  const { title } = siteConfig;
  // 模拟 state
  const [height, setHeight] = useState(0);
  const [code, setCode] = useState("");

  // 模拟 ref
  const iframeRef = useRef(null);

  // 模拟 DidMount
  useEffect(() => {
    const iframeDoc = iframeRef.current.contentWindow.document;
    // 判断是否直接引入文件
    const isImport = !props.children.props;

    // 获取 body 中的内容
    let content = isImport
      ? props.children
      : props.children.props.children.props.children;
    if (isImport) {
      content = content.match(/<body[^>]*>([\s\S]*)<\/body>/)[1];
    }

    // 把 slot 内容写入 iframe 里面
    iframeDoc.open();
    iframeDoc.write(`<style>html,body{margin:0;padding:0}</style>${content}`);
    iframeDoc.close();

    // 查看源码
    setCode(code + content);

    // 高度等于内容高度
    iframeRef.current.onload = () => {
      setHeight(height + iframeDoc.body.scrollHeight + 20);
    };
  }, []);

  function openWin() {
    const win = window.open("");
    win.focus();

    // 把 slot 内容写入 iframe 里面
    win.document.write(`<style>html,body{margin:0;padding:0}</style>${code}`);
    win.document.title = `代码在线运行 | ${title}`;

    win.document.close();
  }

  // 模拟 render
  return (
    <section className={styles.htmlDemo}>
      <header>
        <code>源码预览</code>
        <a onClick={openWin}>打开窗口</a>
      </header>
      <div className={styles.iframeBg}>
        <iframe
          ref={iframeRef}
          height={height}
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}
          width="100%"
        ></iframe>
      </div>
      <details>
        <summary>查看源码</summary>
        <CodeBlock className="language-jsx">{code}</CodeBlock>
      </details>
    </section>
  );
}

export default HtmlDemo;
