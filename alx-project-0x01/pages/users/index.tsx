import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6 text-center">User Directory</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
