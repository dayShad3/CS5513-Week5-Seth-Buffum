import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

//defind a getStaticProps() function
export async function getStaticProps() {
  const allData = getSortedList();
  return{
    props: { allData }
  };
}

// export our home page component
export default function Home({allData}) {
  return(
    <Layout home>
    <h1>Neuromancer Characters</h1>
    <div className="list-group">
      {allData && allData.map(
        ({id, name}) => (
          <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
            {name}
          </Link>
          )
        )
      }
    </div>
    </Layout>
  );
}