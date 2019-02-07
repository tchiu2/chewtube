class UpdateViews < ActiveRecord::Migration[5.2]
  def change
    change_column_null :views, :user_id, true
  end
end
