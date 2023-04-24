import UserProfiles from '../components/UserProfiles';
import Users from './Users';

const Home = () => {
  const profiles = [
    {
      isLoggedIn: false,
      name: 'Cory House',
      username: 'coryhouse',
      avatarUrl: 'https://picsum.photos/200/200',
      profileUrl: 'https://github.com/coryhouse',
      bio: 'Principal reactjsconsulting.com, Pluralsight Author, Software Architect',
    },
    {
      isLoggedIn: false,
      name: 'Kent C. Dodds',
      username: 'kentcdodds',
      avatarUrl: 'https://picsum.photos/200/200',
      profileUrl: 'https://github.com/kentcdodds',
      bio: 'Improving the world w/ quality software · Husband, Father, Teacher, OSS · Be Kind',
    },
  ];

  return (
    <main>
      <h1>Home</h1>

      {/* <UserProfiles profiles={profiles} /> */}
      <Users />
    </main>
  );
};

export default Home;
