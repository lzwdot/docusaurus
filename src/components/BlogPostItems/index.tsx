import React from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import Link, { type Props as LinkProps } from "@docusaurus/Link";
import Tag from "@theme/Tag";
import clsx from "clsx";

import styles from "./styles.module.scss";

export default function BlogPostItems(props: any) {
  return (
    <>
      {props.items.map(({ content }) => (
        <BlogPostItem key={content.metadata.permalink} {...content} />
      ))}
    </>
  );
}

function BlogPostItem(props: any) {
  const { frontMatter, assets, metadata } = props;
  const { withBaseUrl } = useBaseUrlUtils();
  const image = assets.image ?? frontMatter.image;
  const comments = frontMatter.comments || false;

  return (
    <article
      className={clsx("margin-bottom--lg", styles.article)}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      {image && (
        <meta
          itemProp="image"
          content={withBaseUrl(image, { absolute: true })}
        />
      )}
      <BlogPostItemAvatar {...metadata} />
      <div className={clsx(styles.content)}>
        <BlogPostItemTitle {...metadata} />
        <div>
          <BlogPostItemAuthor {...metadata} />
          <Spacer />
          <BlogPostItemInfo {...metadata} />
          <Spacer />
          <BlogPostItemTags {...metadata} />
        </div>
      </div>
      {comments && (
        <div className={clsx(styles.comments)}>
          <span
            itemProp="interactionCount"
            className={clsx("badge", "badge--secondary")}
          >
            {comments}
          </span>
        </div>
      )}
    </article>
  );
}

function BlogPostItemAvatar(props: any) {
  const { authors } = props;
  const { name, title, url, imageURL, email } = authors[0];
  const link = url || (email && `mailto:${email}`) || undefined;

  return (
    <div className={clsx("avatar margin-right--md", styles.avatar)}>
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img
            className={clsx("avatar__photo", styles.avatar__photo)}
            src={imageURL}
            alt={name}
          />
        </MaybeLink>
      )}
    </div>
  );
}

function BlogPostItemAuthor(props: any) {
  const { authors } = props;
  const { name, title, url, imageURL, email } = authors[0];
  const link = url || (email && `mailto:${email}`) || undefined;
  return (
    <>
      {name && (
        <span
          className={clsx("avatar__intro", styles.avatar__intro)}
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <span className={clsx("avatar__name", styles.avatar__name)}>
            <MaybeLink href={link} itemProp="url">
              <span itemProp="name">{name}</span>
            </MaybeLink>
          </span>
          {title && (
            <small
              className={clsx("avatar__subtitle", "screen-reader-only")}
              itemProp="description"
            >
              {title}
            </small>
          )}
        </span>
      )}
    </>
  );
}

function BlogPostItemTitle(props: any) {
  const { permalink, title } = props;
  return (
    <h3 className={clsx("margin-bottom--xs", styles.title)} itemProp="headline">
      <Link itemProp="url" to={permalink}>
        {title}
      </Link>
    </h3>
  );
}

function BlogPostItemInfo(props: any) {
  const { date, formattedDate } = props;

  return (
    <time dateTime={date} itemProp="datePublished">
      {formattedDate}
    </time>
  );
}

function BlogPostItemTags(props: any) {
  const { tags } = props;
  return (
    <ul className={clsx(styles.tags, "padding--none", "margin-left--sm")}>
      {tags.map(({ label, permalink: tagPermalink }) => (
        <li key={tagPermalink} className={styles.tag}>
          <Tag label={label} permalink={tagPermalink} />
        </li>
      ))}
    </ul>
  );
}

function MaybeLink(props: LinkProps): JSX.Element {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}

function Spacer() {
  return <>{" · "}</>;
}
