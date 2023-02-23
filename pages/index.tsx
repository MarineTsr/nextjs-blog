import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import {getSortedPostsData} from "../lib/posts";
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
};

export default function Home({allPostsData}: { allPostsData: { title: string, date: string, id: string }[] }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque sit amet ipsum id
                    vulputate. Quisque fringilla placerat nunc, sed interdum lectus porta id. Donec quis purus suscipit,
                    ultrices dui sed, vestibulum mi.</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn" target="_blank">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br/>
                            {id}
                            <br/>
                            <Date dateString={date}/>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
//