class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :full_name, null: false
      t.string :password_digest, null: false
      t.text :summary

      t.timestamps null: false
    end
  end
end
