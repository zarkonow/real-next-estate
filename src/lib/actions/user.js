import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses
) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          imageUrl: image_url,
          email: email_addresses[0].email_addresse,
        },
      },
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
    console.log("Error Update or Create User", error);
  }
};

export const deleteUser = async (id)=>{
    try {
        await connect();
        await User.findOneAndUpdate({clerkId: id})
    } catch (error) {
        console.log("Error Deleting User", error);
        
    }
 }
