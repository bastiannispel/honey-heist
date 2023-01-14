import { RoleModel } from './models';

export default async function initializeDB() {
  const roleNames = ['user', 'moderator', 'admin'];
  await initializeRoles(roleNames);
}

async function initializeRoles(roleNames: string[]) {
  await RoleModel.estimatedDocumentCount((err: Error, count: number) => {
    if (err || count > 0) {
      return;
    }

    roleNames.forEach(name => {
      new RoleModel({
        name: name,
      })
        .save()
        .then(() => console.log(`added '${name}' to roles collection`))
        .catch(err => {
          console.error('Connection error', err);
          process.exit();
        });
    });
  });
}
