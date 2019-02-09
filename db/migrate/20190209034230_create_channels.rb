class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :description
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :channels, :user_id
    add_index :channels, [:name, :user_id], unique: true
  end
end
