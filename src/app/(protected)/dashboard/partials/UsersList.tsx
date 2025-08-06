"use client";
import Text from "@/shared/components/UI/Text";
import { User } from "@/shared/types/users";
import { getUsers } from "@/shared/utils/api/users/users";
import { useEffect, useState } from "react";
import classes from "./UsersList.module.scss";
import Container from "@/shared/components/UI/Container";
import Button from "@/shared/components/UI/Button";
import { useAuth } from "@/shared/hooks/useAuth";
import Image from "next/image";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { logout } = useAuth();

  const handleGetUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <Container variant="md">
      <div className={classes.usersListHeader}>
        <Text variant="title" color="primary">
          Users List
        </Text>
        <Button schema="secondary" onClick={logout}>
          Logout
        </Button>
      </div>
      <div className={classes.usersListContainer}>
        {users.length === 0 ? (
          <Text className="emptyState">No users found.</Text>
        ) : (
          users.map((user) => (
            <div className={classes.userItem} key={user.login.uuid}>
              <Image
                className={classes.userAvatar}
                src={user.picture.thumbnail}
                alt={`${user.name.first} ${user.name.last}`}
                width={48}
                height={48}
              />
              <div className={classes.userInfo}>
                <Text className={classes.userName}>
                  {user.name.first} {user.name.last}
                </Text>
                <Text className={classes.userEmail}>{user.email}</Text>
              </div>
            </div>
          ))
        )}
      </div>
    </Container>
  );
};

export default UsersList;
