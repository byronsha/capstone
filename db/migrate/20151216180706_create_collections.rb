class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|
      t.string :title, null: false
      t.string :description
      
      t.timestamps null: false
    end
  end
end
