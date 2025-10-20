import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>

      <div className="text-gray-700 space-y-2">
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span> {website}
        </p>
      </div>

      <div className="mt-4 text-gray-700">
        <h3 className="font-semibold text-lg mb-1">Address</h3>
        <p>
          {address.street}, {address.suite}, {address.city} - {address.zipcode}
        </p>
      </div>

      <div className="mt-4 text-gray-700">
        <h3 className="font-semibold text-lg mb-1">Company</h3>
        <p>{company.name}</p>
        <p className="italic text-gray-500">{company.catchPhrase}</p>
      </div>

      <div className="mt-4 text-sm text-gray-500 flex justify-between">
        <span>User ID: {id}</span>
        <span>
          Geo: {address.geo.lat}, {address.geo.lng}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
