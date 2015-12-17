class CreatePhotoCollections < ActiveRecord::Migration
  def change
    create_table :photo_collections do |t|
      t.integer :photo_id, null: false
      t.integer :collection_id, null: false

      t.timestamps null: false
    end
    add_index :photo_collections, :photo_id
    add_index :photo_collections, :collection_id
  end
end
