class ChangeVideos < ActiveRecord::Migration[5.2]
  def change
    rename_column :videos, :uploader_id, :channel_id
  end
end
