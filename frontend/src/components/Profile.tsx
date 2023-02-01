interface Props {
    name : string;
  }
  
  function Profile({ name }: Props) {
    return (
        <div className="flex flex-row justify-center item-center">
          <span className="text-lg mr-2">{name}</span>
        </div>
    );
  }
  
  export default Profile;
  