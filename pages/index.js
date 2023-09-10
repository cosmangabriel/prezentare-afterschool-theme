import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
  /*
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>*/
  <Title>Maranatha After School</Title>
       <h1>Maranatha After School</h1>
   
    <div class="container">
      
        <iframe src="https://www.youtube.com/embed/24D4C40xKfY" frameborder="0" allowfullscreen></iframe>

        <h2>Tarife</h2>
        <table>
            <tr>
                <th>Luna</th>
                <th>Nr. de zile școlare</th>
                <th>Taxă lună întreagă</th>
                <th>Nr. zile jumătate de lună</th>
                <th>Taxă jumătate de lună</th>
            </tr>
            <tr>
                <td>Septembrie</td>
                <td>13</td>
                <td>390</td>
                <td>6</td>
                <td>240</td>
            </tr>
            <tr>
                <td>Octombrie</td>
                <td>22</td>
                <td>660</td>
                <td>11</td>
                <td>440</td>
            </tr>
            <tr>
                <td>Noiembrie</td>
                <td>19</td>
                <td>570</td>
                <td>9</td>
                <td>360</td>
            </tr>
            <tr>
                <td>Decembrie</td>
                <td>16</td>
                <td>480</td>
                <td>8</td>
                <td>320</td>
            </tr>
            <tr>
                <td>Ianuarie</td>
                <td>20</td>
                <td>600</td>
                <td>10</td>
                <td>400</td>
            </tr>
            <tr>
                <td>Februarie</td>
                <td>14</td>
                <td>420</td>
                <td>7</td>
                <td>280</td>
            </tr>
            <tr>
                <td>Martie</td>
                <td>21</td>
                <td>630</td>
                <td>10</td>
                <td>400</td>
            </tr>
            <tr>
                <td>Aprilie</td>
                <td>22</td>
                <td>660</td>
                <td>11</td>
                <td>440</td>
            </tr>
            <tr>
                <td>Mai</td>
                <td>19</td>
                <td>570</td>
                <td>9</td>
                <td>360</td>
            </tr>
            <tr>
                <td>Iunie</td>
                <td>12</td>
                <td>360</td>
                <td>6</td>
                <td>240</td>
            </tr>
        </table>
    </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
