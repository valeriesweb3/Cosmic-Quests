// 导入 Next.js 和 React 相关的包
import Head from 'next/head';
import { useState } from 'react';

// 导入 CSS 模块
import styles from '../styles/Home.module.css';

// 导入组件
import WalletBar from '@/components/WalletBar';
import { StarknetProvider } from '@/components/starknet-provider';
import Mainpage from '@/components/mainpage';

// Home 组件
function Home() {
  // State 和函数（如果有的话）

  // 返回 JSX
  return (
    <div>
      <Head>
        <title>Account Lend and Rent</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
      </Head>

      <nav className={styles.navbar}>
        <ul>
          <li><strong>Account Lend and Rent</strong></li>
        </ul>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#" role="button">Logout</a></li>
        </ul>
      </nav>

      <main className={styles.main}>
        <div className={styles.grid}>
          <section>
            <StarknetProvider>
              <h2>Account Information</h2>
              <h3>Manage Your Account</h3>

              <div className={styles.buttonGroup}>
                <WalletBar />
              </div>
              <Mainpage/>
            </StarknetProvider>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <small><a href="#">Privacy Policy</a> • <a href="#">Terms & Conditions</a></small>
      </footer>
    </div>
  );
}

// 导出 Home 组件
export default Home;
