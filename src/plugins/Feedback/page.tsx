/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';

import cannyScript from './cannyScript';
import styles from './styles.module.css';

const BOARD_TOKEN = '5f064f41-648c-2d91-acd2-cfef5ee1e045';

function useCannyTheme() {
  const { colorMode } = useColorMode();
  return colorMode === 'light' ? 'light' : 'dark';
}

function CannyWidget({ basePath }: { basePath: string }) {
  useEffect(() => {
    cannyScript();
  }, []);

  const theme = useCannyTheme();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { Canny } = window as any;
    Canny('render', {
      boardToken: BOARD_TOKEN,
      basePath,
      theme,
      onLoadCallback: () => setIsLoaded(true),
    });
  }, [basePath, theme]);
  return (
    <>
      <main
        key={theme} // widget needs a full reset: unable to update the theme
        className={clsx('container', 'margin-vert--lg', styles.main, !isLoaded ? "hidden" : "")}
        data-canny
      >
      </main>

      <main className={isLoaded ? "hidden" : ""}>
        <section className="flex justify-center px-20 py-40">
          <div className="w-full max-w-[960px]">
            <p className="w-9/12 animate-pulse">
              <span
                className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"
              ></span>
            </p>
            <p className="w-12/12 animate-pulse">
              <span
                className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"
              ></span>
            </p>
            <p className="w-6/12 animate-pulse">
              <span
                className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle text-base text-neutral-700 opacity-50 dark:text-neutral-50"
              ></span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default function Page({
  basePath,
}: {
  basePath: string;
}): JSX.Element {
  return (
    <Layout title="问题反馈" description="问题反馈">
      <CannyWidget basePath={basePath} />
    </Layout>
  );
}
