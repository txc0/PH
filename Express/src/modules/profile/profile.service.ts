import { pool } from "../../db/index.js";

const createProfileIntoDB = async (payload: any) => {
    const { user_id, bio, address, phone, gender } = payload;

    const userExists = await pool.query(
        `
        SELECT * FROM users WHERE id=$1
        `,
        [user_id]
    );

    if (userExists.rowCount === 0) {
        throw new Error("User not exists in database!!");
    }

    const result = await pool.query(
        `
        INSERT INTO profile(user_id,bio,address,phone,gender)
        VALUES($1,$2,$3,$4,$5) RETURNING *
        `,
        [user_id, bio, address, phone, gender]
    );
    return result.rows[0];
}

export const profileService = {
    createProfileIntoDB,
}