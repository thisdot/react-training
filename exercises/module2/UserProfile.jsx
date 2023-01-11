const UserProfile = ({username, name, avatarUrl, profileUrl, bio}) => {
    return (
        <article>
            <h2>{username}</h2>
            <p>{name}</p>
            {avatarUrl && <img src={avatarUrl} alt={username}/>}
            {profileUrl && <a href={profileUrl}>GitHub Profile</a>}
            <p>{bio}</p>
        </article>
    );
};
}


export default UserProfile;
