import { Button } from "../Button/Button";

interface Props {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onSignup: () => void;
}

export const Header = ({ user, onLogin, onLogout, onSignup }: Props) => (
  <header>
    <div>
      <h1>Header</h1>
    </div>
    <div>
        {user ? (
          <Button isPrimary onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button isPrimary onClick={onLogin} label="Log in" />
            <Button isPrimary={false} onClick={onSignup} label="Sign up" />
          </>
        )}
    </div>
  </header>
);
