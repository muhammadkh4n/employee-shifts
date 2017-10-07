class SlotsController < ApplicationController
  before_action :set_slot, only: [:show, :update, :destroy]

  # GET /slots
  def index
    @slots = Slot.all

    render json: @slots
  end

  # GET /slots/1
  def show
    render json: @slot
  end

  # POST /slots
  def create
    @slot = Slot.new(slot_params)

    if @slot.save
      render json: @slot, status: :created
    else
      render json: @slot.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /slots/1
  def update
    if @slot.update(slot_params)
      render json: @slot
    else
      render json: @slot.errors, status: :unprocessable_entity
    end
  end

  # DELETE /slots/1
  def destroy
    @slot.destroy
    render json: Slot.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_slot
      @slot = Slot.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def slot_params
      params.require(:slot).permit(:timing)
    end
end
