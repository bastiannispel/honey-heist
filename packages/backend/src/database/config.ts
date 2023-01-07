import { RoleModel } from './models';

export default async function initializeDB() {
  await initializeRoles();
}

async function initializeRoles(...names: string[]) {
  await RoleModel.estimatedDocumentCount((err: Error, count: number) => {
    if (err || count > 0) {
      return;
    }

    names.forEach(name => {
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
