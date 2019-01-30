class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.boolean :dislike, null: false
      t.integer :user_id, null: false
      t.references :likeable, polymorphic: true, index: true

      t.timestamps
    end
    add_index :likes, [:user_id, :likeable_id, :likeable_type], unique: true
  end
end
